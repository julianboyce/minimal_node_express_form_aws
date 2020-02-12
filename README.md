Clone or Fork minimal_node_express_setup
================================
Clone or fork this repository

https://github.com/julianboyce/minimal_node_express_setup

Follow the instructions from github to either import from your own repository or fork this repository into a new one named minimal_node_express_form_aws

https://help.github.com/en/github/importing-your-projects-to-github/importing-a-repository-with-github-importer

Setup environment
================================

$ git clone https://github.com/julianboyce/minimal_node_express_form_aws.git

$ cd minimal_node_express_form_aws.git

$ npm install

$ nodemon server.js

Point your browser to http://localhost:3000/aws_form

Amazon S3
================================

[Simple tutorial](https://www.zeolearn.com/magazine/uploading-files-to-aws-s3-using-nodejs)

$ npm install --save aws-sdk

Find your S3 access keys

Navigate to Amazon IAM
https://console.aws.amazon.com/iam/home#/home

Select Users -> Select a user - > Security Credentials -> Create Access Key

This will create an access key which you can see each time you log in to the IAM console BUT the secret key will only be shown to you once.  If you lose it you will need to generate a new key.

$ vi ~/.bash_profile

// Add the following entries to the bottom of this file

export AWS_ACCESS_KEY=MY_ACCESS_KEY

export AWS_SECRET_ACCESS_KEY=MY_AWS_SECRET_ACCESS_KEY

$ source ~/.bash_profile // Apply changes to current shell

Note:

For system-wide operations, it should be in /etc/profile,

For user based operations, it should be in ~/.bash_profile,

For non-login interactive shells, it should be in ~/.bashrc.

Create a bucket (Example name is minimal-node-express-form-aws) The [workflow and instructions](https://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html) are subject to change.
