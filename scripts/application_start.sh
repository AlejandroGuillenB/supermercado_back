#!/bin/bash

echo 'run application_start.sh: ' >> /home/admin/supermercado_back/deploy.log

echo 'pm2 restart start:prod' >> /home/admin/supermercado_back/deploy.log
pm2 restart start:prod >> /home/admin/supermercado_back/deploy.log
