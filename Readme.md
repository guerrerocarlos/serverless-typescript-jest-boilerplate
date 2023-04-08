## Serverless typescript boilerplate

 - **Without** webpack
 - Simple packaging
 - Jest pre-configured ready for TDD

## How to use:

### Run Locally

 - Clone repo
 - run `yarn install`
 - set REGION, S3_BUCKET, DOMAIN and SUB_DOMAIN env variables
 - run `yarn offline`

### Deploy from local

Same as `Locally`, setup the AWS required policies bellow and execute: 

 - `yarn deploy`

 ### Deploy from Github Actions

Setup `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` env variables and just push to any branch.

## AWS required policies:

Recommended AWS policies:

For `serverless` deployments:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "acm:DescribeCertificate",
                "lambda:CreateFunction",
                "iam:GetPolicyVersion",
                "s3:CreateBucket",
                "iam:CreateRole",
                "iam:PutRolePolicy",
                "apigateway:UpdateRestApiPolicy",
                "iam:ListAttachedRolePolicies",
                "cloudformation:UpdateStack",
                "lambda:DeleteFunction",
                "logs:FilterLogEvents",
                "apigateway:GET",
                "cloudformation:List*",
                "s3:DeleteObject",
                "iam:ListRolePolicies",
                "iam:GetRole",
                "events:DescribeRule",
                "iam:GetPolicy",
                "lambda:InvokeFunction",
                "lambda:List*",
                "cloudformation:*",
                "iam:DeleteRole",
                "s3:DeleteBucketPolicy",
                "cloudwatch:GetMetricStatistics",
                "logs:CreateLogGroup",
                "s3:PutObject",
                "s3:GetObject",
                "events:Delete*",
                "events:Remove*",
                "cloudformation:DeleteStack",
                "lambda:PublishVersion",
                "apigateway:POST",
                "iam:GetRolePolicy",
                "cloudformation:ValidateTemplate",
                "lambda:CreateAlias",
                "cloudformation:CreateUploadBucket",
                "s3:PutAccelerateConfiguration",
                "logs:DescribeLogStreams",
                "s3:ListBucketVersions",
                "s3:ListBucket",
                "s3:GetBucketPolicy",
                "s3:PutEncryptionConfiguration",
                "apigateway:DELETE",
                "s3:GetEncryptionConfiguration",
                "iam:PassRole",
                "iam:DeleteRolePolicy",
                "apigateway:PATCH",
                "s3:DeleteBucket",
                "events:Put*",
                "logs:DescribeLogGroups",
                "apigateway:PUT",
                "logs:DeleteLogGroup",
                "lambda:Update*",
                "iam:ListRoles",
                "lambda:Get*",
                "logs:PutLogEvents",
                "cloudformation:Describe*",
                "lambda:AddPermission",
                "cloudformation:CreateStack",
                "s3:PutBucketPolicy",
                "iam:UpdateRole",
                "s3:GetBucketLocation",
                "lambda:RemovePermission",
                "cloudformation:Get*",
                "sqs:*",
                "logs:*",
            ],
            "Resource": "*"
        }
    ]
}
```

And also this one for `serverless` deployments with `serverless-domain-manager` module enabled:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:ValidateTemplate",
                "cloudformation:UpdateStack"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:GET",
                "apigateway:DELETE"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:PATCH",
                "apigateway:POST"
            ],
            "Resource": [
                "*",
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudfront:UpdateDistribution"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ListHostedZones"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "acm:ListCertificates"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets",
                "route53:GetHostedZone",
                "route53:ListResourceRecordSets"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "iam:CreateServiceLinkedRole"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```