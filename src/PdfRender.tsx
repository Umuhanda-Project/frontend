import React, { useState } from 'react';
import { useModal } from './hooks/useModal';

interface PdfViewerProps {
  /** URL or path to the PDF file */
  file: string;
  /** Optional custom height for the viewer container */
  height?: string;
  /** Optional custom width for the viewer container */
  width?: string;
  /** Optional custom class name for the container */
  className?: string;
  /** Optional callback when PDF loads successfully */
  onLoadSuccess?: () => void;
  /** Optional callback when PDF fails to load */
  onLoadError?: (error: Error) => void;
  /** Optional callback when PDF is downloaded */
  onDownload?: () => void;
  /** Hide download button if set to true */
  hideDownload?: boolean;
  /** Hide zoom controls if set to true */
  hideZoom?: boolean;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  file,
  height = 'calc(100vh - 200px)',
  width = 'max-w-4xl',
  className = '',
  onLoadSuccess,
  onLoadError,
  onDownload,
  hideDownload = false,
  hideZoom = false,
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(100);
  const { isOpen, openModal } = useModal();
  console.log(isOpen);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 10, 50));
  };

  const handleRetry = () => {
    setError(false);
    setLoading(true);
  };

  const handleDownload = () => {
    try {
      openModal();
      if(isOpen){
        window.open(file, '_blank');
        onDownload?.();
      }
    } catch (err) {
      console.error('Download failed:', err);
      onLoadError?.(err as Error);
    }
  };

  const handleLoad = () => {
    setLoading(false);
    onLoadSuccess?.();
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    onLoadError?.(new Error('Failed to load PDF'));
  };

  return (
    <div className={`mx-auto border rounded-lg shadow-lg bg-white ${width} ${className}`}>
      {/* Controls */}
      {(!hideZoom || !hideDownload) && (
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          {!hideZoom && (
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 transition-colors"
                onClick={handleZoomOut}
                disabled={scale <= 50}
                aria-label="Zoom out"
              >
                -
              </button>
              <span className="text-sm font-medium">{scale}%</span>
              <button
                className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 transition-colors"
                onClick={handleZoomIn}
                disabled={scale >= 200}
                aria-label="Zoom in"
              >
                +
              </button>
            </div>
          )}
          {!hideDownload && (
            <button
              className="px-4 py-1 border rounded hover:bg-gray-100 transition-colors"
              onClick={handleDownload}
              aria-label="Download PDF"
            >
              Download PDF
            </button>
          )}
        </div>
      )}

      {/* PDF Viewer */}
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600" />
          </div>
        )}

        {error ? (
          <div className="p-8 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-lg mx-auto">
              <p className="text-red-700 mb-4">
                Unable to load PDF file. Please ensure the file exists and is accessible.
              </p>
              <button
                className="px-4 py-2 border rounded bg-white hover:bg-gray-50 transition-colors"
                onClick={handleRetry}
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full bg-gray-100 rounded-lg overflow-hidden" style={{ height }}>
            <iframe
              src={file}
              className="w-full h-full"
              style={{ transform: `scale(${scale / 100})`, transformOrigin: 'top left' }}
              onLoad={handleLoad}
              onError={handleError}
              title="PDF Viewer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
