export const downloadDocument = async (filePath: string, fileName: string) => {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error('Download failed', err);
  }
};