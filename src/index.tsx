import { ActionPanel, List, Action } from "@raycast/api";
import { lsitProviders } from "./viewer/provider";

export default function Command() {
  return lsitProviders();
}
