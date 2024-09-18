import Airtable from "airtable";

import GuidesListing from "~/components/guides/guide-listings";
import CategoriesComponent from "~/components/guides/categories-component";
import PopularGuidesAlternative from "~/components/guides/popular-guides-alternative";
import ProviderGuideCarousel from "~/components/guides/provider-guide-carousel";

export interface GuideProp {
  id: string;
  fields: {
    "Guide Title": string;
    Guide: string;
  };
}

async function getAirtableData(): Promise<GuideProp[]> {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID ?? "");

  return new Promise((resolve, reject) => {
    base("Guides")
      .select({
        view: "Grid view",
        maxRecords: 10,
      })
      .all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          reject(new Error(String(err)));
          return;
        }

        const guidePosts =
          records?.map((record) => ({
            id: record.id,
            fields: record.fields as GuideProp["fields"],
          })) ?? [];

        resolve(guidePosts);
      });
  });
}

export default async function UserGuides() {
  const guides = await getAirtableData();

  return (
    <section className="flex w-full flex-col items-center justify-center space-y-12 pt-32">
      <h1 className="text-center text-3xl font-bold">
        Wellness Provider Guides
      </h1>
      <div className="mx-auto mb-8 w-full max-w-lg">
        <ProviderGuideCarousel guides={guides} />
      </div>
      <div className="flex w-full max-w-4xl flex-col gap-8 px-4 md:flex-row">
        <GuidesListing guides={[...guides]} />
        <div className="w-full md:w-1/3">
          <PopularGuidesAlternative guides={[...guides]} />
          <CategoriesComponent />
        </div>
      </div>
    </section>
  );
}
