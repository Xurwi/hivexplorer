
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { pageMapDispatchToProps, pageMapStateToProps } from '../../pages/common';
import { withPersistentScroll } from '../../components/with-persistent-scroll';
import Theme from '../../components/theme';
import './EntryPage.scss'
import { _t } from '../../i18n';
import { getDiscussion } from '../../api/urls';
import { Accordion, Container } from 'react-bootstrap';
import EntryBody from './EntryBody';
import BackToTopButton from '../../components/Buttons/BackToTop';
import EntryVotes from './EntryVotes';
import EntryProperties from './EntryProperties';
import { showLessIcon, showMoreIcon } from '../../img/svg';
import SpinnerEffect from '../../components/loader/spinner';



const EntryPage = (props: any) => {

    const { match } = props
    const userName = match.params.user_id
    const permLink = match.params.permlink
    const permlink_url = getDiscussion(userName, permLink)
    const [entry, setEntry] = useState<any>()
    const currTheme = useSelector((state: any) => state.global.theme)
    const themeContrastColor = currTheme === 'day' ? 'black' : 'white';
    const [openBody, setOpenBody] = useState(true)
    const [openProperties, setOpenProperties] = useState(false)
    const [openVotes, setOpenVotes] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(permlink_url)
        // axios.get(permlink_url).then(res => {
        //     console.log(res.data)
        //     setEntry(res.data)
        // })
        const fetchData = async () =>{
            setLoading(true);
            try {
              const {data: response} = await axios.get(permlink_url);
              setEntry(response);
            } catch (error:any) {
              console.error(error.message);
            }
            setLoading(false);
          }
          fetchData();
    }, [])
    return (

        <>
            <Theme global={props.global} />
            <Container className='entry-content-container'>
                <>  {loading && <SpinnerEffect />}
                    {!loading && entry && Object.keys(entry).slice(0, 1).map((key, i: number) => {
                        return (
                            <>  
                                <h2>{entry[key].title}</h2>
                                <div key={i}>
                                    <div className='entry-header'>
                                        <div className='mr-2'>
                                            <img className='avatar-img' src={`https://images.ecency.com/u/${entry[key].author}/avatar`} alt="" />
                                        </div>
                                        <div>
                                            <h4><Link to={`/@${entry[key].author}`}>{entry[key].author}</Link></h4>
                                            <p>{entry[key].created}</p>
                                        </div>
                                    </div>
                                    <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                                        <Accordion.Item eventKey="0" onClick={() => setOpenBody(!openBody)}>
                                            <Accordion.Header>
                                                <span>{_t('entry.body')}</span>
                                                <span>{openBody ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {entry[key].body && <EntryBody body={entry[key].body} />}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" onClick={() => setOpenProperties(!openProperties)}>
                                            <Accordion.Header>
                                                <span>{_t('entry.properties')}</span>
                                                <span>{openProperties ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {entry[key] && <EntryProperties entries={entry[key]} />}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        {entry[key].active_votes.length!==0 && <Accordion.Item className='votes-accordion' eventKey="2" onClick={() => setOpenVotes(!openVotes)}>
                                            <Accordion.Header >
                                                <span>
                                                    <span className='mr-2'>{_t('entry.votes')}</span>  {entry[key].active_votes && <span>{` (${entry[key].active_votes.length}) `}</span>}
                                                </span>
                                                <span>{openVotes ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <EntryVotes votes={entry[key].active_votes} />
                                            </Accordion.Body>
                                        </Accordion.Item>}
                                        
                                            {entry && Object.keys(entry).slice(1,).map((key, i: number) => {
                                                return (
                                                    <>
                                                        <div key={i} >
                                                        <div className='permlink-discussion-content'>
                                                            <Accordion className={currTheme === "day" ? "accordion-day" : "accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                                                                <Accordion.Item eventKey="0" onClick={() => setOpenBody(!openBody)}>
                                                                    <Accordion.Body>
                                                                        <div>
                                                                            <p><img className='avatar-img' src={`https://images.ecency.com/u/${entry[key].author}/avatar`} alt=""/> <Link to={`@${entry[key].author}`}>{entry[key].author}</Link></p>
                                                                            <p> <Link to={`/${entry[key].category}/@${entry[key].author}/${entry[key].permlink}`}>{entry[key].permlink}</Link></p>
                                                                        </div>
                                                                        {entry[key].body && <EntryBody body={entry[key].body} />}
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="1" onClick={() => setOpenProperties(!openProperties)}>
                                                                    <Accordion.Header>
                                                                        <span>{_t('entry.properties')}</span>
                                                                        <span>{openProperties ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        {entry[key] && <EntryProperties entries={entry[key]} />}
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                {entry[key].active_votes.length!==0 && <Accordion.Item eventKey="2" onClick={() => setOpenVotes(!openVotes)}>
                                                                    <Accordion.Header >
                                                                        <span>
                                                                            <span className='mr-2'>{_t('entry.votes')}</span>  {entry[key].active_votes && <span>{` (${entry[key].active_votes.length}) `}</span>}
                                                                        </span>
                                                                        <span>{openVotes ? showLessIcon(themeContrastColor) : showMoreIcon(themeContrastColor)}</span>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <EntryVotes votes={entry[key].active_votes} />
                                                                    </Accordion.Body>
                                                                </Accordion.Item>}
                                                            </Accordion>
                                                        </div>
                                                        </div>
                                                        <br />
                                                    </>
                                                )
                                            })}
                                        

                                    </Accordion>
                                </div>
                            </>
                        )
                    })}

                </>

                {/* {entry &&  
              
                <>
                <div className='entry-header'>
                    <div className='mr-2'>
                        <img className='avatar-img' src={`https://images.ecency.com/u/${entry.author}/avatar`} alt=""/> 
                    </div>
                    <div>
                        <h4><Link to={`/@${entry.author}`}>{entry.author}</Link></h4>
                        <p>{entry.created}</p>
                    </div>
                </div>
                <Accordion className={currTheme==="day"?"accordion-day":"accordion_night"} defaultActiveKey={['0']} alwaysOpen={true}>
                    <Accordion.Item eventKey="0" onClick={()=>setOpenBody(!openBody)}>
                        <Accordion.Header>
                            <span>{_t('entry.body')}</span>
                            <span>{openBody?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {entry.body && <EntryBody body={entry.body} />}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" onClick={()=>setOpenProperties(!openProperties)}>
                        <Accordion.Header>
                            <span>{_t('entry.properties')}</span>
                            <span>{openProperties?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {entry && <EntryProperties entry={entry}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" onClick={()=>setOpenVotes(!openVotes)}>
                        <Accordion.Header >
                           <span>
                                <span className='mr-2'>{_t('entry.votes')}</span>  {entry.active_votes && <span>{` (${entry.active_votes.length}) `}</span>}
                            </span>
                           <span>{openVotes?showLessIcon(themeContrastColor):showMoreIcon(themeContrastColor)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                           {entry.active_votes &&  <EntryVotes votes={entry.active_votes} />}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </>
            } */}

            </Container>
            <BackToTopButton />
        </>
    )
};
export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(EntryPage));