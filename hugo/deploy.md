# Deploy static site to AWS S3


## High Level Overview
1. Build hugo project
2. Put static files into AWS S3 bucket. Configure S3 bucket for public accessibility
3. For HTTPS, required to deploy to AWS Cloudfront CDNs and register your SSL certificate.


## Building the project
```
# Build the project with the base URL pointing to the S3 website endpoint
hugo -b http://thomasvn.dev.deploy.s3-website.us-west-1.amazonaws.com/

# Below is a test for when deploying to Cloudfront CDNs
# hugo -b https://d1b6y9gj1sczyf.cloudfront.net/

# Automatically push the built code to AWS S3. This will require you have already run `aws configure`
hugo deploy
```


## S3 Configuration


## HTTPS


## Useful Resources
Tutorials
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
- https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/module-1/

CloudFront Info
- https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/
- https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serving-outdated-content-s3/