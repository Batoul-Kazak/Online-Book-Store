
import GetHelp from "@/components/ui/GetHelp/GetHelp";
import { getHelpQuickLinks } from "@/_lib";

export const metaData = {
  title: "Help Page",
  describtion: `${getHelpQuickLinks.map(link => link?.address)}`
}

export default function GetHelpPage() {
  return <GetHelp />
}