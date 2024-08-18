type EditProfileSectionTitleProps = {
  title: string;
};

export default function EditProfileSectionTitle({
  title,
}: EditProfileSectionTitleProps) {
  return (
    <h2 className="mb-2 font-semibold uppercase text-white mt-6 px-4 pb-2">
      {title}
    </h2>
  );
}
