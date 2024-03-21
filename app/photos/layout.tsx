export default function PhotosGallery({
  children,
  modal
}: Readonly<{
  children: React.ReactNode,
  modal:React.ReactNode
}>) {
  return (
   <>
   <main>
    <div>{children}</div>
    <div>{modal}</div>
   </main>
   </>
  );
}
