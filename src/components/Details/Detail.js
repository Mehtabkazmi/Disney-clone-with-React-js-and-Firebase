import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebase";

const Detail = (props) => {

  const { id } = useParams();
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    db.collection("movies").doc(id).get().then((doc) => {
      if (doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log("there is no data!");
      }
    }).catch((e) => console.log(e.message));
  },[id]);
  return (
    <div className="container">
      <div className="background">
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>

      <div className="detailData">
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="content">
        <div className="controls">
          <button className="player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </button>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <div className="addList">
            <span />
            <span />
          </div>
          <div className="groupWatch">
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="subTitle">{detailData.subTitle}</div>
        <div className="description">{detailData.description}</div>
      </div>
    </div>
  );
};
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

export default Detail;