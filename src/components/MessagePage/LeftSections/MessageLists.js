import React from 'react'
import userThumbnail from "../../../assets/images/img_user-thumbnail.png";
import {
    getMessage,
    setCurrentMessage
} from "../../../redux/actions/message_actions";
import { useDispatch, useSelector } from 'react-redux';

function MessagesLists() {
    const dispatch = useDispatch();
    const messageLists = useSelector(state => state.messages.messageLists)
    const currentMessage = useSelector(state => state.messages.currentMessage)

    const onMessageClick = (messageId) => {
        console.log('messageId',messageId)
        dispatch(getMessage(messageId))
        dispatch(setCurrentMessage(messageId))
    }

    const renderMessageLists = () => (
        messageLists && messageLists.map(message => {
            const isCurrentMessage = message.id === Number(currentMessage) ? "current-chat" : "";
            const renderSendTo = message.sendTo.map(user => {
                return <span>{user}{" "}</span>
            })
            return (
                <li className={`chat-list-single  ppl-1x2 ${isCurrentMessage} `} key={message.id} onClick={() => onMessageClick(message.id)}>
                    <div className="list-thumb-area">
                        <div className="user-pic-wrap">
                            <img src={userThumbnail} alt="user-profile-picture" />
                        </div>
                        <div className="user-pic-wrap">
                            <img src={userThumbnail} alt="user-profile-picture" />
                        </div>
                    </div>

                    <div className="list-info-area">
                        <div className="list-row 1">
                            <div className="chat-ppl-num">
                            </div>
                            <div className="chat-room-name">
                                {renderSendTo} 
                            </div>
                        </div>
                        <div className="list-row 2">
                            <div className="last-chat">
                                {message.title}
                            </div>
                            <div className="icon-chat-noti on"></div>
                        </div>
                        <div className="list-row 3">
                            <div className="last-chat-from sub1">
                                {" "}{message.sentBy}
                            </div>
                            <div className="last-chat-time sub1">
                                {message.createdAt}
                            </div>
                        </div>
                    </div>
                </li>
            )
        })
    )

    return (
        <div>
            {renderMessageLists()}
        </div>
    )
}

export default MessagesLists



{/* <li className="chat-list-single  ppl-1x2">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            3
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>, 김하나<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter unread">
            3
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            (사진)
        </div>
        <div className="icon-chat-noti on"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 10:55
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x3">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            4
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>, 김하나<span className="ppl-position">과장 (개발팀)</span>, 이두리<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter unread">
            999+
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            (이모티콘)
        </div>
        <div className="icon-chat-noti on"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            이두리
        </div>
        <div className="last-chat-time sub1">
            오전 10:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1xn">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            5
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>, 김하나<span className="ppl-position">과장 (개발팀)</span>, 이두리<span className="ppl-position">과장 (개발팀)</span>, 최서이<span className="ppl-position">주임 (개발팀)</span>
        </div>
        <div className="chat-counter unread">
            999+
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네~ 그리고 다음주 미팅 끝나고 식사는 어딜로 예약할까요? 선호하시는 메뉴 있으시면 말씀해주세요
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김하나
        </div>
        <div className="last-chat-time sub1">
            2020-08-23
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1xn current-chat">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            6
        </div>
        <div className="chat-room-name">
            tf팀
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네~ 그리고 다음주 미팅 끝나고 식사는 어딜로 예약할까요? 선호하시는 메뉴 있으시면 말씀해주세요
        </div>
        <div className="icon-chat-noti on"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김하나
        </div>
        <div className="last-chat-time sub1">
            2020-08-23
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1 my">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            홍길동<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            MY
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            (파일: 지출결의서.xls)
        </div>
        <div className="icon-chat-noti on"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            나
        </div>
        <div className="last-chat-time sub1">
            2020-08-22
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li>
<li className="chat-list-single  ppl-1x1">
<div className="list-thumb-area">
    <div className="user-pic-wrap">
        <img src={userThumbnail} alt="user-profile-picture" />
    </div>
</div>
<div className="list-info-area">
    <div className="list-row 1">
        <div className="chat-ppl-num">
            2
        </div>
        <div className="chat-room-name">
            김철수<span className="ppl-position">과장 (개발팀)</span>
        </div>
        <div className="chat-counter">
            0
        </div>
    </div>
    <div className="list-row 2">
        <div className="last-chat">
            네 알겠습니다
        </div>
        <div className="icon-chat-noti off"></div>
    </div>
    <div className="list-row 3">
        <div className="last-chat-from sub1">
            김철수
        </div>
        <div className="last-chat-time sub1">
            오전 11:00
        </div>
    </div>
</div>
</li> */}