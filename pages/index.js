import React from 'react';

export default function Home(props) {
  return (
    <Page>
      <MainSlider />
      {
        props.sections.map((section, index)=>(
          <Section key={ section.name } title={ section.title } icon={ section.icon } hasBackground= { index%2 == 0 && section.icon!=null}>
          </Section>
        ))
      }
    </Page>
  );
}
