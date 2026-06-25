import AnchorDetailClient from "./AnchorDetailClient";

export const dynamic = "force-dynamic";

export default async function AnchorDetailPage({ params }) {
  const { anchor_code } = await params;

  return <AnchorDetailClient anchor_code={anchor_code} />;
}
