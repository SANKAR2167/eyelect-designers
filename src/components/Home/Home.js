import React from 'react'
import './Home.css'
import Slider from './Slider'


export default function Home() {
    return (
        <div className='home'>
            <div className="main-carousel">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bffdc58-dbf5-4b72-8165-05b8c68ebc5e/depqdw3-20b9fa05-f9fe-4cb0-8d31-2e0d459f3127.png/v1/fill/w_1280,h_641,q_80,strp/fashion_web_banner_design_by_themesfusion_depqdw3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQxIiwicGF0aCI6IlwvZlwvMWJmZmRjNTgtZGJmNS00YjcyLTgxNjUtMDViOGM2OGViYzVlXC9kZXBxZHczLTIwYjlmYTA1LWY5ZmUtNGNiMC04ZDMxLTJlMGQ0NTlmMzEyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lGiIQhholle_CgZVB207H5T9KF3VXEEfaOcePKL6oEY" className="d-block w-100 c-img" alt="..." />
                        </div>
                        <div className="carousel-item c-item">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/07975c123230301.60ea0ccf07aad.jpg" className="d-block w-100 c-img" alt="..." />
                        </div>
                        <div className="carousel-item c-item">
                            <img src="https://i.ytimg.com/vi/b09bgcQvQ-Y/maxresdefault.jpg" className="d-block w-100 c-img" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
            
            <div className="home-category-container">
                <div className="home-category-heading">
                    <h2>CATEGORY</h2>
                </div>
                <div className="home-category-card">
                    <div className="card">
                        <div className="card-content">
                            <h2>Bridal Blouse</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Saree</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Kurtis</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Frock</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Lehanga</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Night Dress</h2>
                            <button>Click me</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper-container-carousel">
               <Slider/>
            </div>
        </div>
    )
}
