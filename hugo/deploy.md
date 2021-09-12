# Deploying your static site

## Deploy to S3

```bash
# Build the project with the base URL pointing to the S3 website endpoint
hugo -b http://thomasvn.dev.deploy.s3-website.us-west-1.amazonaws.com/

# Below is a test for when deploying to Cloudfront CDNs
# hugo -b https://d1b6y9gj1sczyf.cloudfront.net/

# Automatically push the built code to AWS S3. This will require you have already run `aws configure`
hugo deploy
```

## Deploy to Firebase

```bash
# Build the project with the base URL pointing to the S3 website endpoint
hugo -b https://thomasvn.dev
python3 quickstart/analytics.py
```

```bash
$ npm install -g firebase-tools
$ firebase login
$ cd quickstart
$ firebase init
# "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"
# "Create a new project"
$ firebase deploy
```

## References

S3 Tutorials:

- <https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html>
- <https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/module-1/>

CloudFront Info:

- <https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/>
- <https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serving-outdated-content-s3/>

Firebase:

- <https://firebase.google.com/docs/hosting/>
