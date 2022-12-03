import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Wrapper } from "./stylle";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFViewer(url) {

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}:{numPages: number}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    return (
          <Wrapper>
            <Document file= {url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error} 
            >
              {Array.from(
                new Array(numPages),
                (el,index) => (
                  <Page 
                    canvasBackground={"transparent"}
                    scale={1.75}
                    key={`page_${index+1}`}
                    pageNumber={index+1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                )
              )}
            </Document>
          </Wrapper>
    );
  }

export default PDFViewer;