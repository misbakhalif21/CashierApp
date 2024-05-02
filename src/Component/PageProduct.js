import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Logo from '../Image/Ujian.jpeg'

function PageProduct() {
  return (
    <div className='container'>
        <div className='row'>
            <div style={{marginTop:'25px'}}>
                <p className='text-align-center' style={{color:'white', lineHeight:'30%'}}>
                    <p style={{fontSize:'90%', color:'#cab6b6'}}>Selamat Datang,</p><br/>
                    <p>Outlet CKP Bogorr</p>
                </p>
            </div>
            <div className='col-md-12' style={{backgroundColor:'white', borderTopLeftRadius:'30px', borderTopRightRadius:"30px", height:'100%', marginTop:'20px'}}>
                <p className='text-start' style={{color:'black', marginTop:'20px',marginLeft:'10px', fontWeight:'bold', lineHeight:'normal'}}>
                    Produk<br/>
                    <p style={{fontWeight:'500',color:'#3c3838',fontSize:'85%'}}>Ditemukan 100 jenis</p>
                </p>
                <Form.Control
                    type="search"
                    placeholder = 'Masukan Kode Po...'
                />
                <br/>
                <div style={{lineHeight:'50%'}}>
                <Card>
                    <Card.Body >
                        <div className='d-flex flex-row'>
                            <div className='p-2'><Image src={Logo} rounded style={{width:'70px', height:'70px'}} /></div>
                            <div className='d-flex flex-column' style={{lineHeight:'normal', marginTop:'10px',width:'100%'}}>
                                <div className='text-start' style={{fontSize:'1rem', color:'grey'}}>SKU0123456789</div>
                                <div className='text-start' style={{fontSize:'1rem'}}>Daging Sapi</div>
                                <div className='d-flex flex-row' style={{fontSize:'1rem',display:'flex', justifyContent:'space-between'}}>
                                    Rp.10.000/gram
                                        <Button variant="danger" size="sm">
                                            Beli
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Body >
                        <div className='d-flex flex-row'>
                            <div className='p-2'><Image src={Logo} rounded style={{width:'70px', height:'70px'}} /></div>
                            <div className='d-flex flex-column' style={{lineHeight:'normal',marginTop:'10px', width:'100%'}}>
                                <div className='text-start' style={{fontSize:'1rem', color:'grey'}}>SKU0123456789</div>
                                <div className='text-start' style={{fontSize:'1rem'}}>Daging Sapi</div>
                                <div className='d-flex flex-row' style={{fontSize:'1rem',display:'flex', justifyContent:'space-between'}}>
                                    Rp.10.000/gram
                                        <Button variant="danger" size="sm">
                                            Beli
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Body >
                        <div className='d-flex flex-row'>
                            <div className='p-2'><Image src={Logo} rounded style={{width:'70px', height:'70px'}} /></div>
                            <div className='d-flex flex-column' style={{lineHeight:'normal',marginTop:'10px', width:'100%'}}>
                                <div className='text-start' style={{fontSize:'1rem', color:'grey'}}>SKU0123456789</div>
                                <div className='text-start' style={{fontSize:'1rem'}}>Daging Sapi</div>
                                <div className='d-flex flex-row' style={{fontSize:'1rem',display:'flex', justifyContent:'space-between'}}>
                                    Rp.10.000/gram
                                        <Button variant="danger" size="sm">
                                            Beli
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Body >
                        <div className='d-flex flex-row'>
                            <div className='p-2'><Image src={Logo} rounded style={{width:'70px', height:'70px'}} /></div>
                            <div className='d-flex flex-column' style={{lineHeight:'normal',marginTop:'10px', width:'100%'}}>
                                <div className='text-start' style={{fontSize:'1rem', color:'grey'}}>SKU0123456789</div>
                                <div className='text-start' style={{fontSize:'1rem'}}>Daging Sapi</div>
                                <div className='d-flex flex-row' style={{fontSize:'1rem',display:'flex', justifyContent:'space-between'}}>
                                    Rp.10.000/gram
                                        <Button variant="danger" size="sm">
                                            Beli
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Body >
                        <div className='d-flex flex-row'>
                            <div className='p-2'><Image src={Logo} rounded style={{width:'70px', height:'70px'}} /></div>
                            <div className='d-flex flex-column' style={{lineHeight:'normal',marginTop:'10px', width:'100%'}}>
                                <div className='text-start' style={{fontSize:'1rem', color:'grey'}}>SKU0123456789</div>
                                <div className='text-start' style={{fontSize:'1rem'}}>Daging Sapi</div>
                                <div className='d-flex flex-row' style={{fontSize:'1rem',display:'flex', justifyContent:'space-between'}}>
                                    Rp.10.000/gram
                                        <Button variant="danger" size="sm">
                                            Beli
                                        </Button>
                                        <Button variant="info" size="sm" style={{marginLeft:'3.9rem'}} onClick={()=> console.log("Halo")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                        </svg>
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageProduct