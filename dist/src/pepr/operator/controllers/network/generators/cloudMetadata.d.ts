import { V1NetworkPolicyPeer } from "@kubernetes/client-node";
export declare const META_IP = "169.254.169.254/32";
/**
 * The cloud metadata endpoint is a common cloud address that can be used to
 * access cloud provider metadata.
 *
 * AWS: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
 *
 * GCP: https://cloud.google.com/compute/docs/storing-retrieving-metadata
 *
 * Azure: https://docs.microsoft.com/en-us/azure/virtual-machines/windows/instance-metadata-service
 *
 * DigitalOcean: https://www.digitalocean.com/docs/droplets/resources/metadata/
 *
 * @returns A NetworkPolicyPeer that matches the cloud metadata service
 */
export declare const cloudMetadata: V1NetworkPolicyPeer[];
//# sourceMappingURL=cloudMetadata.d.ts.map