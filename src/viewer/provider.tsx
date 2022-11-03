import { Provider } from "../util/types";
import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { listResoueces } from "./resource";
export function lsitProviders() {
  const providers = [
    {
      name: "Google Cloud Platform",
      url: "https://github.com/hashicorp/terraform-provider-google/",
      resourcePath: "website/docs/r",
      dataPath: "website/docs/d",
      versions: ["latest", "1.2.1"],
    },
    {
      name: "Amazon Web Service",
      url: "https://github.com/hashicorp/terraform-provider-aws/",
      resourcePath: "website/docs/r",
      dataPath: "website/docs/d",
      versions: ["latest", "1.2.1"],
    },
  ];
  return (
    <List>
      {providers.map((provider) => (
        <List.Item
          key={provider.url}
          title={provider.name}
          actions={
            <ActionPanel>
              <Action.Push
                title={`Navigate to versions`}
                target={
                  <List>
                    {provider.versions.map((version) => (
                      <List.Item
                        key={version}
                        title={version}
                        actions={
                          <ActionPanel>
                            <Action.Push title={`${provider} ${version}`} target={listResoueces()} />
                          </ActionPanel>
                        }
                      />
                    ))}
                  </List>
                }
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
