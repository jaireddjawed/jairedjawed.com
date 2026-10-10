import Cal, { getCalApi } from "@calcom/embed-react";
import {JSX, useEffect} from "react";

type CalEmbedProps = {
  calLink: string;
  namespace: string;
};

export default function CalEmbed({ calLink, namespace }: CalEmbedProps): JSX.Element {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#059669" },
          dark: { "cal-brand": "#34d399" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
