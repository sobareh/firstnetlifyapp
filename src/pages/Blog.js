import React, {Component} from 'react'

class Blog extends Component {
    render() {
        return (
            <>
            <div className="container mt-3">
                <div className="row">
                    {this.props.dataApi.map(data => (
                    <div className="col-md-4" key={data.id}>
                        <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">{data.fullname}</div>
                            <div className="card-body">
                            <h5 className="card-title">{data.username}</h5>
                            <p className="card-text">{data.city}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
           
            </>
        )
    }
}

export default Blog