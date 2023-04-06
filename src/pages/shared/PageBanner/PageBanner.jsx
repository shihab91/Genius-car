import React from 'react'

const PageBanner = ({ title }) => {
	return (
		<div className='service-details-banner'>
			<h1>{title}</h1>
			<div className='breadcrumb'>Home / {title}</div>
		</div>
	)
}

export default PageBanner
