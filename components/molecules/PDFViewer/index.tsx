import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { inflateRaw } from "zlib";
import { Wrapper } from "./stylle";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerInterface {
    url: string
}
  

const PDFViewer: React.FC<PDFViewerInterface> = ({ url }) => {

    const [numPages, setNumPages] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {

      function handleResize(){
        if(window.innerWidth < 800) setWidth(window.innerWidth/1.2)
        if(window.innerWidth < 700) setWidth(window.innerWidth/1.1)
        else if(window.innerWidth < 600) setWidth(window.innerWidth/1.05)
        else setWidth(window.innerWidth/1.5)
        console.log(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, [])

  
    function onDocumentLoadSuccess({numPages}:{numPages: number}){
      setNumPages(numPages);
    }
  
    return (
          <Wrapper>
            <Document 
            file= {url}
            renderMode= {"canvas"}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error} 
            >
              {Array.from(
                new Array(numPages),
                (el,index) => (
                  <Page 
                    //@ts-ignore
                    canvasBackground={"transparent"}
                    width={width}
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