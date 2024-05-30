export default function Carousel(){
  const setDiv = Array(4).fill(null);
  const renderSlideDiv = Array(4).fill(null);
  const renderQnDiv = Array(2).fill(null);
  return (
    <div className="flex flex-row gap-12 justify-center">
      {
        setDiv.map((items,index) =>(
          <div className="flex gap-12">
            <div className="flex flex-row gap-3">
              {
                renderSlideDiv.map((slideitem,slideindex) =>(
                  <div className=" bg-[#E8E2F4]">{(slideindex+1) + (index)*6}</div>
                ))
              }
            </div>
            <div className="flex flex-row gap-3">
                {
                  renderQnDiv.map((qnitems,qnindex)=>(
                    <div className=" bg-[#8C52FF]">{(qnindex+5) + (index)*6 }</div>
                  ))
                }
            </div>
          </div>
        ))
      }
    </div>
    
    
    
  );
}