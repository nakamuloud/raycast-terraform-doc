import { Action, ActionPanel, Detail, List } from "@raycast/api";
import { fetchMarkdown } from "../repository/document.repository";
import { Source } from "../util/types";

export function listResoueces() {
  const sources: Source[] = [
    {
      name: "access_context_manager_access_level.html.markdown",
      url: "https://raw.githubusercontent.com/hashicorp/terraform-provider-google/main/website/docs/r/access_context_manager_access_level.html.markdown",
    },
  ];
  return (
    <List>
      {sources.map((source) => (
        <List.Item
          key={source.name}
          title={source.name}
          actions={
            <ActionPanel>
              <Action.Push title={source.name} target={<Detail markdown={fetchMarkdown(source.url)} />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
