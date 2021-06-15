import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';

import db from "../firebase";

const Detail = () => {

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
    return(
    <Container>

<Background>
        {/* <img alt={detailData.title} src={detailData.backgroundImg} /> */}
        <img alt={detailData.title} src="data:image/jpeg;base64,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"/>
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/Images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/Images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="Iimages/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>



    </Container>
    ); 
}


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;