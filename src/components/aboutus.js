import React from 'react';
const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Our Online Course Learning Management System</h1>
      <img
        src="https://pbs.twimg.com/profile_images/1438785247936761859/041HNU84_400x400.jpg" // Replace with your actual Coursehub image URL
        alt="Online Course Learning Management System"
        style={styles.image}
      />
      <p style={styles.paragraph}>
        Our Online Course Learning Management System is designed to facilitate
        effective online learning and management of educational resources.
        With a user-friendly interface, instructors can easily create,
        manage, and deliver content, while students can access a wide
        variety of learning materials and track their progress.
      </p>
      <p style={styles.paragraph}>
        Key features of our coursehub include course enrollment, interactive
        quizzes, assignment submissions, and comprehensive analytics for
        both instructors and students. We believe in providing a
        collaborative learning environment that empowers users to achieve
        their educational goals.
      </p>
      <p style={styles.paragraph}>
        Join us on this educational journey and explore the endless
        possibilities our Coursehub has to offer!
      </p>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default AboutUs;
