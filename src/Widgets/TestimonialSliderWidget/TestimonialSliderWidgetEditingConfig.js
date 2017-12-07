import testimonialSliderWidgetIcon from 'assets/images/testimonial_slider_widget.svg';
import TestimonialWidget from 'Widgets/TestimonialWidget/TestimonialWidgetClass';

Scrivito.provideEditingConfig('TestimonialSliderWidget', {
  title: 'Testimonial Slider',
  description: 'A testimonial slider.',
  thumbnail: `/${testimonialSliderWidgetIcon}`,
  attributes: {
    testimonials: {
      title: 'Testimonials',
    },
  },
  properties: [
    'testimonials',
  ],
  initialContent: {
    testimonials: [new TestimonialWidget({})],
  },
});
