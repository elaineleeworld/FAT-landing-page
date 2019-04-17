This is the landing page for RED Interactive's proprietary, now open-source Javascript framework for building deluxe banner ads quickly and efficiently accommodating volume and variety.

<a name="deployment"></a>

## Deployment - Joyent Elastic Cloud

Project includes a Dockerfile that will build a fully functional image. You will need Docker infrastructure installed in your local environment.

`npm run docker`

Next, push the image from local to Docker Hub, and then pull it to Joyent Triton. You will need the Triton-Docker infrastructure installed and setup in your local environment.

`npm run docker:triton`

Run the docker image in the cloud with:

`npm run triton:run`

Triton will launch the Container with a random instance name. Joyent provides a [CNS](https://docs.joyent.com/public-cloud/network/cns/usage#using-triton-cns-in-docker) means of handling web traffic to the new instance's IP. Set it to the existing service `dns-service` like so:

`triton instance tag set -w <instance_name> triton.cns.services=dns-service`

Now you can safely delete the previous instance, and rename the new one:

`triton instance delete fat-landing-page`
`triton instance rename <instance_name> fat-landing-page`
