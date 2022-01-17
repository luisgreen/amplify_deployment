# Amplify Deployment

The `amplify_deployment` GitHub action creates a deployment into an existing Amplify aplication.

As this use the AWS SDK, credentials should be set beforehand on env variables.

## Secrets
Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` secrets to repo settings. The access key will require the appropriate policies to deploy an artifact to amplify. 

## Usage

```yml
- uses: luisgreen/amplify_deployment@main
  with:
    # Amplify Application ID
    # required: true
    appId: ''

    # Amplify Application branch to deploy
    # required: true
    branchName: ''

    
    # Path where the artifact is located to be deployed
    # required: true
    artifactPath:

    # Region of the Amplify Application
    # required: true
    region:
```

## Sample

```yml
- uses: luisgreen/amplify_deployment@main
  with:
    appId: 'asd8adsjasd9'
    branchName: 'master'
    artifactPath: './myapp.zip'
    region: 'us-west-2'
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
