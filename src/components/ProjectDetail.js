import styled from "styled-components";

function ProjectDetail() {
  return (
    <Container>
      <Detail>
        <Figures>
          <h1>$89,914</h1>
          <p>of $100,000 backed</p>
        </Figures>
        <Figures>
          <h1>5,007</h1>
          <p>total backers</p>
        </Figures>
        <Figures>
          <h1>56</h1>
          <p>days left</p>
        </Figures>
      </Detail>
      <ProgressBar>
        <Progress />
      </ProgressBar>
    </Container>
  );
}

const Container = styled.div`
  min-width: 325px;
  width: 45%;
  background: rgb(279, 279, 279);
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 40px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  @media (max-width: 376px) {
    /* height: 55vh; */
    padding: 10px 25px 40px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 30px 0 20px;

  @media screen and (max-width: 376px) {
    justify-content: center;
    column-gap: 120px;
  }
`;

const Figures = styled.div`
  border-right: 1px solid hsl(0, 0%, 48%);
  padding: 0 50px 0 10px;

  &:last-child {
    border: none;
  }
  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.1rem;
    color: hsl(0, 0%, 48%);
  }

  @media screen and (max-width: 376px) {
    border-right: none;
    border-bottom: 1px solid hsl(0, 0%, 48%);
    text-align: center;
    padding: 0;
    padding-bottom: 20px;
  }
`;

const ProgressBar = styled.div`
  margin-top: 45px;
  height: 15px;
  width: 95%;
  background-color: hsl(0, 0%, 93%);
  border-radius: 20px;
`;

const Progress = styled.div`
  height: 100%;
  width: 80%;
  background-color: hsl(176, 50%, 47%);
  border-radius: 20px;
  opacity: 1;
  transition: width 1s ease 0s;
`;

export default ProjectDetail;
