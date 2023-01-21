import React from "react";
import playIconn from "../../design/ruinatv-icon-play-n.png";
import { Link } from "react-router-dom";
import editIcon from '../../design/edit-icon.png';
import deleteIcon from '../../design/delete-icon.png';
import { useDispatch, useSelector } from "react-redux";
import s from './css/Media.module.css';
import { getDeleteMedia, getEditMedia } from "../../middlewares/redux/actions";

const Media = ({ cardList, style, keyID }) => {
  const rolUser = useSelector(state=>state.rolUser)
  const dispatch = useDispatch()
  return (
    <div className={style.sliderItems}>
      <ul
        className={style.sliderListaItems}
        id={`${keyID}ListaItems`}
      >
        {
          cardList? cardList.map((e, i) => {
              return (
                <li value={e.id} key={i}>
                  <div className={style.sliderItem}>
                    <Link
                      to={`/view/v=${e.idLinkYT}=_type_=${e.mediaType}=_id_=${e.id}`}
                    className='link' >
                      <button
                        className={style.media}
                        style={{
                          backgroundImage: e.linkimg
                            ? `url(${e.linkimg})`
                            : "error",
                        }}
                        id={e.id}
                        urlid={e.urlID}
                        titulo={e.title}
                        artista={e.artist}
                        img={e.linkimg}
                        onClick={() => {
                          document.querySelector(`.link`).style.transitionDelay='1s'
                          return window.scrollTo(0, 0);
                        }}
                      >
                        {/* <img src={e.icon} alt="logo" className={style.logoItem} /> */}
                        {rolUser==='admin'?(
                          <ul className={s.adminRequest}>
                            <li className={s.adminBtn}>
                              <img src={editIcon} onClick={()=>{return dispatch(getEditMedia(e.id))}} className={s.editImg} alt='edit' width='15px' />
                            </li>
                            <li className={s.adminBtn}>
                              <img src={deleteIcon} onClick={()=>{return dispatch(getDeleteMedia(e.id))}} className={s.deleteImg} alt='delete' width='15px' />
                            </li>
                          </ul>
                        )
                        : null
                        }
                      </button>
                    </Link>
                    <Link to={``} className={style.link}>
                      <p>
                        <img
                          className={style.sliderItemIconPlayN}
                          src={playIconn}
                          alt="play"
                        />
                        {e.title}
                      </p>
                    </Link>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default Media;
