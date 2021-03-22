# Amplify Deployment

The `amplify_deployment` GitHub action creates a deployment into an existing Amplify aplication.

As this use the AWS SDK, credentials should be set beforehand on env variables.

## Usage

```yml
- uses: luisgreen/aws-actions/amplify_deployment@main
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
- uses: luisgreen/aws-actions/amplify_deployment@main
  with:
    appId: 'asd8adsjasd9'
    branchName: 'master'
    artifactPath: './myapp.zip'
    region: 'us-west-2'
```
