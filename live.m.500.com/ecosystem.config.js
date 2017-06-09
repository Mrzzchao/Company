module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
    apps: [

    // First application
        {
            name: 'score',
            script: 'server.js',
            env: {
                COMMON_VARIABLE: 'true'
            }
        }
    ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
    deploy: {
        production: {
            user: 'xiezg',
            host: '10.0.0.51',
            ref: 'origin/master',
            'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
            repo: 'service@10.0.0.31:/home/service/score.git',
            path: '/home/service/score',
            'post-deploy': 'cnpm install &&npm run build && pm2 startOrRestart ecosystem.config.js --env production'
        },
        development: {
            user: 'service',
            host: '192.168.41.76',
            ref: 'origin/master',
            'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
            repo: 'service@10.0.0.31:/home/service/score.git',
            path: '/home/service/score',
            'post-deploy': 'cnpm install && pm2 startOrRestart ecosystem.config.js --env development'
        }

    }
};
