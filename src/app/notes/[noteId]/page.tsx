export default async function Note({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const noteId_ = (await params).noteId;

  return <div className="text-4xl text-hue p-10">Note {noteId_}</div>;
}
