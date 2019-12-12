<?php
namespace Deployer;

require 'recipe/symfony4.php';

// Project name
set('application', 'www');

// Other settings
set('env', ['APP_ENV'=>'prod']);
set('http_user', 'liveged');
set('writable_mode', 'chmod');

// Project repository
set('repository', 'git@github.com:ilri/livegene.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', ['public/upload']);

// Writable dirs by web server 
add('writable_dirs', []);

task('livegene:build_assets', function () {
    run('yarn build');
})->local();
before('deploy:prepare', 'livegene:build_assets');

// Hosts

host('ovh')
    ->set('deploy_path', '~/{{application}}');    
    
// Tasks
task('build', function () {
    run('cd {{release_path}} && build');
});

task('livegene:upload_assets', function () {
    // this task should upload the built assets for production
    upload(__DIR__.'/public/build/', '{{release_path}}/public/build/');
});
after('deploy:update_code', 'livegene:upload_assets');

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

before('deploy:symlink', 'database:migrate');

