import React from 'react';
import '../../stylesheets/regionSelector.scss'

const RegionSelector = () => {

  // function that will handle all region button clicks by toggling between inactive and active classes -> this will change the css styling and make it look like the region is highlighted when active
  const handleRegionClick = e => {
    console.log('test')
    e.currentTarget.classList.toggle('activeButton')
  }

  return (
    <div className='container'>   
      <button id='chest' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='forearms' className='inactiveButton' onClick={handleRegionClick}> Forearms </button>
      <button> Glutes </button>
      <button> Lower Back </button>
      <button> Middle Back </button>
      <button> Hamstrings</button>
      <button> Calves </button>
      <button> Neck </button>
      <button> Lats </button>
      <button> Traps </button>
      <button> Triceps </button>

      <div className='bodyFront'>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ccf0dd3-1aaf-48a1-a4ed-973b45b51493/db7vjyf-7137f7aa-cfa0-4bc3-871a-01d5ca295776.jpg/v1/fill/w_1280,h_1600,q_75,strp/master_chief_deconstructed_by_christopher_stoll_db7vjyf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzFjY2YwZGQzLTFhYWYtNDhhMS1hNGVkLTk3M2I0NWI1MTQ5M1wvZGI3dmp5Zi03MTM3ZjdhYS1jZmEwLTRiYzMtODcxYS0wMWQ1Y2EyOTU3NzYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.62aqSg63fRcH_GWrFeAmljYqXK0OqrH_gE4GX1j7Zac"
          alt="Master Chief Anatomy Drawing" className="master-chief"></img>
      </div>
    </div>
  )
}

export default RegionSelector;

