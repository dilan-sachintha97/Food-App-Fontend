

const Cart = () => {


  return (
    
    <div className="card mt-3" style={{width: '17rem', maxHeight:"360px", backgroundColor:"#10161d", color:"#fff"}}>
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to buil</p>
            <div className="container w-100">
                <select className="m-2 h-100 p-1 bg-success rounded text-white">
                    {Array.from(Array(6),(element,i)=>(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                </select>

                <select className="m-2 h-100 p-1 bg-success rounded text-white">
                        <option  value="half">Half</option>
                        <option  value="full">Full</option>
                </select>

                <div className="d-inline h-100 fs-6">
                    Total Price
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
