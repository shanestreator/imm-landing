import React, { Component } from 'react'

export default class FooterTestimonials extends Component {
  render() {
    const testimonials = [
      {
        name: 'Angela C.',
        job: 'Director of Clinical Services',
        location: 'Shaw, MS',
        description:
          'Having to travel a lot this is very convenient, helpful & motivational'
      },
      {
        name: 'Debi M.',
        job: 'Global Ops Manager',
        location: 'Colliervile, TN',
        description: 'keep it in my wallet...fantastic, wonderful read'
      },
      {
        name: 'Tyson W.',
        job: 'Teacher',
        location: 'Riverside, IA',
        description: 'perfect for a quick pick me up.'
      },
      {
        name: 'Dr. Michael G.',
        job: 'Clinical Psychologist',
        location: 'Elgin, IL',
        description: 'create positive change, experience positive outcomes'
      },
      {
        name: 'Bianca P.',
        job: 'Ultra Runner',
        location: 'Friendship, WI',
        description: 'great motivation!'
      },
      {
        name: 'Shane S.',
        job: 'Web Developer',
        location: 'Chicago, IL',
        description: 'thought provoking and motivational'
      },
      {
        name: 'Tyler B.',
        job: 'Firefighter/Paramedic',
        location: 'Las Vegas, NV',
        description:
          'helped accelerate my career, recommend to friends, family and co-workers'
      }
    ]

    return (
      <div className="container px-md-5">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {testimonials.map((testimonial, i) => {
              const { name, job, location, description } = testimonial
              return (
                <div class={i === 0 ? 'carousel-item active' : 'carousel-item'}>
                  <p
                    style={{ fontSize: '20px' }}
                    className="d-block w-100 text-muted  font-italic"
                  >
                    "{description}"
                  </p>
                  <p className="d-block w-100 text-muted">
                    {name} - {location}
                    <p className="d-block w-100 text-muted">{job}</p>
                  </p>
                </div>
              )
            })}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
