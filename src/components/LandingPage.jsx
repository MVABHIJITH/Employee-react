import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home')
  }
  return (
    < >
      <div className='container'>
        <div style={{ borderRadius: '20px 100px' }} className="row  bg-secondary p-5 mt-3">
          <div className="col-lg-6">
            <div>
              <h2 style={{ fontSize: '40px' }} className='fw-bolder text-warning mb-3 py-3'><span style={{ fontSize: '60px' }} className='text-primary'>Employee</span> Detailes<br /> Website</h2>
              <p className='mt-5 fs-5 text-white'>Employee management system is an application based system, having two applications developed, one for employers to
                manage employee details and another for employees to mark their attendance. Every organisation whether government or private uses an information system to store data of their staff.  </p>
              <div>
                <button onClick={handleNavigate} style={{ borderRadius: '50px', width: '200px' }} className='btn btn-danger mt-4 mb-5'><b>Click here</b></button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-center">
            <img style={{ borderRadius: ' 50px' }} height={"500"} className='w-100' src="https://www.myshortlister.com/app/uploads/2022/10/ezgif.com-gif-maker-2.gif" alt="" />
          </div>
        </div>

        <div className='mt-5 container '>
          <div className="row rounded  p-5">
            <div className="col-lg-4   py-3 ">
              <div className='ms-5'>
                <Card className='shadow ' style={{ width: '18rem', height: '410PX' }}>
                  <Card.Img height={'200px'} variant="top" src="https://1finance.co.in/magazine/wp-content/uploads/2023/06/16404392_tp212-socialmedia-02-1-scaled.jpg" />
                  <Card.Body className='text-'>
                    <Card.Title className='text-warning'><span className='text-primary'>HEALTH</span> INSURANCE</Card.Title>
                    <Card.Text>
                      <p className='text-white '> Health insurance policy is an assurance which provides immediate financial help in case when any medical emergency arises</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-lg-4  py-3">
              <div className='ms-5'>
                <Card className='shadow' style={{ width: '18rem' }}>
                  <Card.Img height={'200px'} variant="top" src="https://zfunds-public.s3.ap-south-1.amazonaws.com/articlesImage/1596714335188" />
                  <Card.Body className='text-'>
                    <Card.Title className='text-warning'><span className='text-primary'>PROVIDENT</span> FUND</Card.Title>
                    <Card.Text>
                      <p className='text-white '> A Provident Fund is a savings and retirement fund in India that is typically established and contributed to by salaried employees and their employers.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-lg-4  py-3">
              <div className='ms-5'>
                <Card className='shadow' style={{ width: '18rem', height: '410PX' }}>
                  <Card.Img height={'200px'} variant="top" src=" https://img.freepik.com/premium-vector/social-security-benefit-state-allowance-retirement-insurance-happy-disabled-person-old-elderly_566886-2249.jpg" />
                  <Card.Body className='text-'>
                    <Card.Title className='text-warning'><span className='text-primary'>SOCIAL</span> SECURITY</Card.Title>
                    <Card.Text>
                      <p className='text-white '>  Social Security provides financial protection for our nation's people, supporting Americans throughout all of life's journeys.          </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>


        <div style={{ borderRadius: '20px 50px' }} className="row mt-5 bg-secondary p-5 ">
          <div className="col-lg-5">
            <img style={{ borderRadius: '20px 50px' }} height={"400"} className='w-100' src="https://pulsemotivation.com/wp-content/uploads/2022/02/Pulse-Motivation-Employee-engagement-strategy%E2%80%A8.gif" alt="" />
          </div>
          <div className="col-lg-7  justify-content-center align-items-center">
            <div  >
              <p className='mt-5 fs-5 text-white'>Finding the perfect employee involves defining the ideal candidate, crafting compelling job descriptions,
                utilizing multiple channels for recruitment, conducting effective interviews, assessing cultural fit, checking references, offering competitive compensation and benefits,
                providing growth opportunities, and trusting your instincts. It's a thorough process that requires careful consideration of skills, experience, personality,
                and alignment with company values and culture.
              </p>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default LandingPage