import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Create an AWS resource (EC2 Instance)
const ec2 = new aws.ec2.Instance("ec2", {
  ami: "ami-026b57f3c383c2eec",
  instanceType: "t3.micro",
  tags: {
      Name: "HelloWorld",
  },
});

// Export the name of the bucket
export const bucketName = bucket.id;
