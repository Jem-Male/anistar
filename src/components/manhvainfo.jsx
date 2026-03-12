import StarIcon from"../assets/style/image/free-icon-star-1828884.png"
import Bookmarc from "../assets/style/image/m4dj4p8fpc4f75l2u4ivft17o0.png"
import Like from "../assets/style/image/free-icon-heart-16821598.png"
import Download from "../assets/style/image/downloading-updates-48.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ManhvaInfo(){

    const {id}=useParams();
    const[post,setPost]= useState({});
     
    useEffect(()=>{
        async function fetchPost() {
            try{
                const response= await axios.get(`https://5cd98c2db8b39274.mokky.dev/home/${id}`);
                setPost(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchPost();
    },[id]);

    return (
        <div className="category-row-dww">
        <div className="po">
            <div className="cardd">
                <p className="p">p</p>
                <img style={{ textAlign: 'center' }} className="img_m" src={post.img} alt=""/>
                <p className="p">p</p>
            </div>
            <h2 className="name-go">{post.name}</h2>
            <p className="name-go">2024</p>
            <div className="cards">
                <div>
                    <span className="name-go">рейтинг</span>
                    <br></br>
                    <img className="icon_img" src={StarIcon} alt=""/>
                    <span className="name-go">9/10</span>
                </div>
                <div>
                    <span className="name-go">глав</span>
                    <br></br>
                    <span className="name-go">1</span>
                </div>
                <div>
                    <span className="name-go">лайков</span>
                    <br></br>
                    <img className="icon_img" src={Like} alt=""/>
                    <span className="name-go">9</span>
                </div>
                <div>
                    <span className="name-go">в закладках</span>
                    <br></br>
                    <img className="icon_img" src={Bookmarc} alt=""/>
                    <span className="name-go">2</span>
                </div>
            </div>
            <h3 className="name-g">описание</h3>
            <div className="paddig">
                <span className="name-g2">
                    {post.description}
                </span>
            </div>
        </div>        
        <div className="manhva_run">
            <Link to={`/read/${post.id}`} className="run" >
                <p className="s">p</p>
                <h3 className="name-go">Читать</h3>
            </Link>
            <a className="run" href="">
                <p className="s">p</p>
                <img className="download" src={Download} alt=""/>
            </a>
        </div>
    </div>
    );
}

export default ManhvaInfo;


const manhws = [
  {
    "id": 1,
    "img": "https://cover.imglib.info/uploads/cover/i-alone-level-up/cover/MqLYFST4k4mY_250x350.jpg",
    "name": "поднятия уровня в одиночку",
    "description": "Многие годы я проливал кровь за Соединённую Империю и её правителя — Рагнара...",
    "page": "https://img33.imgslib.link//manga/i-alone-level-up/chapters/214970/1.png"
  },
  {
    "id": 2,
    "img": "https://cover.imglib.info/uploads/cover/suddenly-became-a-princess-one-day-/cover/7D1NZ3i1lPvW_250x350.jpg",
    "name": "Однажды я стала принцессой",
    "description": "Когда я открыла глаза, то стала принцессой из романа, который я читала. Но почему из всех персонажей этой истории именно принцессой, судьба которой тесно переплетена с кровавым императором? Если я хочу выжить, то должна быть неприметной для его глаз и сбежать!«Когда это в моём дворце начали жить ничтожные людишки?».Человек, у которого нет ни капли сочувствия, ни слезинки — этот холодный император Клод! Неужели Атанасия, пойманная императором, сможет выжить?«Что… Что же мне делать?..»",
    "page": "https://img33.imgslib.link//manga/suddenly-became-a-princess-one-day-/chapters/615996/001_TT2x.png"
  },
  {
    "id": 3,
    "img": "https://cover.imglib.info/uploads/cover/jeonjijeog-dogja-sijeom_/cover/fH64VTVQdHiu_250x350.jpg",
    "name": "Всеведуйщий читатель",
    "description": "«Я знаю то, что сейчас будет». В тот момент, когда он подумал об этом, мир был уже разрушен, и вдруг открылась новая вселенная. Новая жизнь обычного читателя начинается в мире романа... романа, который смог прочесть лишь он.",
    "page": "https://img33.imgslib.link//manga/jeonjijeog-dogja-sijeom_/chapters/632073/001_TLcV.png"
  },
  {
    "id": 4,
    "img": "https://cover.imglib.info/uploads/cover/wind-breaker/cover/RWDstYRkXMxO_250x350.jpg",
    "name": "Ветролом",
    "description": "Ветролом — драма о юных уличных гонщиках, мечтающих о свободе. Главный герой — Джа Хён — сын успешных родителей и лучший ученик в своей школе, он никогда не знал, что значит «бороться за свою мечту», ведь вся его жизнь определялась родителями, которые хотят для сына только одного — успешного окончания школы. Но однажды Джа Хён, с детства любящий велоспорт, оказывается втянут в деятельность местных гонщиков, что заставляет героя пересмотреть приоритеты родителей и прислушаться к себе, ведь на своем новом пути он обретает друзей, любовь и приключения!",
    "page": "https://img33.imgslib.link//manga/wind-breaker/chapters/74281/WindBreaker_gl0_1.jpg"
  },
  {
    "id": 5,
    "img": "https://cover.imglib.info/uploads/cover/ag-yeog-uiending-eunjug-eumppun/cover/UPSR3DuoHw3m_250x350.jpg",
    "name": "Единственный исход злодейки — смерть",
    "description": "Два старших брата, всегда ссорящиеся со мной по любому пустяку. Безумный наследный принц, что убивает всех на пути.Но самое ужасное — что бы я ни делала, всё приводит меня только к смерти... Я должна сблизиться с кем-то из мужчин гарема героини, прежде чем появится «настоящая дочь» семьи Экхарт...",
    "page": "https://img33.imgslib.link//manga/ag-yeog-uiending-eunjug-eumppun/chapters/635735/01_6JUc.png"
  },
  {
    "id": 6,
    "img": "https://cover.imglib.info/uploads/cover/white-blood_/cover/C4zmaQFcEYLv_250x350.jpg",
    "name": "Белая Кровь",
    "description": "Корею поглотил хаос. Уже как десять лет вампиры терроризируют мирных граждан, а правительство совершенно бессильно! Пак Хаян (имя означает «белый») — 20-летняя студентка колледжа, желающая просто иметь друзей и проводить свои дни, как самый обычный человек. Но есть преграда — она чистокровный вампир. Все меняется, когда тайну Хаян раскрывают и на неё объявлена охота обоих миров — человечества и вампиров, и Хаян оказывается в настоящей опасности, ведь за её сердце готовы отдать тысячи жизней... Ради власти и господства.",
    "page": "https://img33.imgslib.link//manga/white-blood_/chapters/469072/000000_eQsl.png"
  },
  {
    "id": 7,
    "img": "https://cover.imglib.info/uploads/cover/nan-hao-shang-feng/cover/z27eOqNzSwWk_250x350.jpg",
    "name": "Нань Хао и Шан Фэнь",
    "description": "История о буднях двух школьных друзей. Иногда весёлая, иногда грустная, иногда драматичная, но всегда интересная!",
    "page": "https://img33.imgslib.link//manga/nan-hao-shang-feng/chapters/408522/dAcdGyR.png"
  },
  {
    "id": 8,
    "img": "https://cover.imglib.info/uploads/cover/yeoju-ingong-ui-oppaleul-jikineun-bangbeob/cover/QSNVw0qwWZgX_250x350.jpg",
    "name": "Как защитить старшего брата главной героини",
    "description": "Я переродилась в новелле 19+ с реверс-гаремом. Проблема в том, что я стала старшей сестрой второго, злого главного героя... Мой чертов отец в конце концов похитил старшего брата главной героини. Теперь осталось только дожидаться мести от главной героини и разрушения рода? Ах, избежать смертельной концовки и правда тяжело. 'Я тоже заинтересована в этой игрушке'. Раз уж так вышло, то я тебя защищу. Поэтому обязательно отплати мне той же монетой, понял?",
    "page": "https://img33.imgslib.link//manga/yeoju-ingong-ui-oppaleul-jikineun-bangbeob/chapters/1231938/001_LRzr.png"
  },
  {
    "id": 9,
    "img": "https://cover.imglib.info/uploads/cover/olgami/cover/tA2NDweMVrhq_250x350.jpg",
    "name": "Петля",
    "description": "В прошлом Хан Чэ А пришлось многое пережить: обвинение сестры, смерть родителей, тюремное заключение. Казалось бы, хуже уже быть просто не может. Но однажды Пак Юн Су предлагает ей очень необычную сделку...",
    "page": "https://img33.imgslib.link//manga/olgami/chapters/907422/1_OvOb.png"
  }
]

console.log(manhws)