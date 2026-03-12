import CategoryGo from "./page/categorygo";

function CategoryGoInfo(){

    const categorys=[
        {
            id:1,
            img_cat:"https://cover.imglib.info/uploads/cover/biingi-mabeobsonyeodo-yeon-aehal-su-issnayo/cover/8t6RxYGVLXmQ_250x350.jpg",
            dw_name:"Biingi mabeobsonyeodo yeon-aehal su issnayo?",
            dw_date:"Автор Chuk Gye"
        },
        {
            id:2,
            img_cat:"https://cover.imglib.info/uploads/cover/biingi-mabeobsonyeodo-yeon-aehal-su-issnayo/cover/8t6RxYGVLXmQ_250x350.jpg",
            dw_name:"Biingi mabeobsonyeodo yeon-aehal su issnayo?",
            dw_date:"Автор Chuk Gye"
        },
        {
            id:3,
            img_cat:"https://cover.imglib.info/uploads/cover/biingi-mabeobsonyeodo-yeon-aehal-su-issnayo/cover/8t6RxYGVLXmQ_250x350.jpg",
            dw_name:"Biingi mabeobsonyeodo yeon-aehal su issnayo?",
            dw_date:"Автор Chuk Gye"
        },
        {
            id:4,
            img_cat:"https://cover.imglib.info/uploads/cover/biingi-mabeobsonyeodo-yeon-aehal-su-issnayo/cover/8t6RxYGVLXmQ_250x350.jpg",
            dw_name:"Biingi mabeobsonyeodo yeon-aehal su issnayo?",
            dw_date:"Автор Chuk Gye"
        },
        {
            id:5,
            img_cat:"https://cover.imglib.info/uploads/cover/biingi-mabeobsonyeodo-yeon-aehal-su-issnayo/cover/8t6RxYGVLXmQ_250x350.jpg",
            dw_name:"Biingi mabeobsonyeodo yeon-aehal su issnayo?",
            dw_date:"Автор Chuk Gye"
        },
    ]

    return(
        <div class="category-row-dw">
            <div class="category-row-dow">
                <h3 class="category-text">новинки</h3>
                {categorys.map((category, index)=>(
                    <CategoryGo
                        key={category.id}
                        img_cat={category.img_cat}
                        dw_name={category.dw_name}
                        dw_date={category.dw_date}
                    />
                ))}
        </div>
        </div>
    );
}

export default CategoryGoInfo;