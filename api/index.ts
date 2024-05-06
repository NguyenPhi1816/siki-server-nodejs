const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://yourdomain.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/home", (req, res) =>
  res.send([
    {
      id: 0,
      image:
        "https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp",
      name: "For you",
      products: [
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29650000,
        },
        {
          id: 11,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29990000,
        },
        {
          id: 12,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29890000,
        },
        {
          id: 2,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro",
          averageRating: 5,
          price: 26990000,
        },
        {
          id: 3,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15 Plus",
          averageRating: 4,
          price: 23990000,
        },
        {
          id: 4,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 5,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
          name: "Samsung Galaxy S24 5G",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 6,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
          name: "Samsung Galaxy S24+ 5G",
          averageRating: 4,
          price: 23490000,
        },
        {
          id: 7,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
          name: "Samsung Galaxy S24 Ultra 5G",
          averageRating: 3,
          price: 29690000,
        },
        {
          id: 8,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg",
          name: "Xiaomi 14 5G",
          averageRating: 5,
          price: 19990000,
        },
        {
          id: 9,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg",
          name: "Xiaomi Redmi Note 13 Pro",
          averageRating: 4,
          price: 6790000,
        },
        {
          id: 10,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
          name: "OPPO Reno11 5G",
          averageRating: 4,
          price: 10690000,
        },
      ],
    },
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
      products: [
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29650000,
        },
        {
          id: 11,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29990000,
        },
        {
          id: 12,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29890000,
        },
        {
          id: 2,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro",
          averageRating: 5,
          price: 26990000,
        },
        {
          id: 3,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15 Plus",
          averageRating: 4,
          price: 23990000,
        },
        {
          id: 4,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15",
          averageRating: 4,
          price: 20690000,
        },
      ],
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
      name: "Samsung",
      products: [
        {
          id: 5,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
          name: "Samsung Galaxy S24 5G",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 6,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
          name: "Samsung Galaxy S24+ 5G",
          averageRating: 4,
          price: 23490000,
        },
        {
          id: 7,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
          name: "Samsung Galaxy S24 Ultra 5G",
          averageRating: 3,
          price: 29690000,
        },
      ],
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png",
      name: "Xiaomi",
      products: [
        {
          id: 8,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg",
          name: "Xiaomi 14 5G",
          averageRating: 5,
          price: 19990000,
        },
        {
          id: 9,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg",
          name: "Xiaomi Redmi Note 13 Pro",
          averageRating: 4,
          price: 6790000,
        },
      ],
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/OPPO_LOGO_2019.png",
      name: "OPPO",
      products: [
        {
          id: 10,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
          name: "OPPO Reno11 5G",
          averageRating: 4,
          price: 10690000,
        },
      ],
    },
  ])
);

app.get("/products/iphone-15-pro-max-12345", (req, res) =>
  res.send({
    id: 1,
    slug: "iphone-15-pro-max-12345",
    name: "Iphone 15 Pro Max",
    description:
      '<h3>Nội dung quảng cáo</h3>\n<p>Giờ đây với thiết kế titan nhẹ và bền chắc, cùng chip A17 Pro cho khả năng đa nhiệm khủng. Bắt trọn những khoảnh khắc đặc biệt khi đang di chuyển với hệ thống camera chuyên nghiệp linh hoạt hơn. Và một bước nhảy vọt về tốc độ truyền dữ liệu với USB-C cùng chuẩn USB 3.</p>\n<p>&nbsp;</p>\n<h3>Tính năng nổi bật</h3>\n<ul>\n<li>ĐƯỢC ĐÚC TỪ TITAN&nbsp;— iPhone 15 Pro Max sở hữu thiết kế titan chuẩn hàng không vũ trụ, nhẹ và bền chắc với mặt sau bằng kính nhám. Mặt trước Ceramic Shield bền chắc hơn mọi mặt kính điện thoại thông minh. Và có khả năng chống tia nước, chống nước và chống bụi.<sup>1</sup></li>\n<li>MÀN HÌNH TIÊN TIẾN — Màn hình Super Retina XDR 6,7"<sup>2</sup> với ProMotion tăng tốc độ làm mới lên đến 120Hz khi bạn cần đến hiệu năng đồ họa vượt trội. Dynamic Island hiển thị linh động các cảnh báo và Hoạt Động Trực Tiếp. Đồng thời, với màn hình Luôn Bật, Màn Hình Khóa của bạn luôn hiển thị, nên bạn thậm chí không cần chạm vào màn hình để cập nhật thông tin.</li>\n<li>CHIP A17 PRO THAY ĐỔI CUỘC CHƠI — GPU đẳng cấp Pro đem tới đồ họa mượt mà hơn cùng ánh sáng chân thực dành cho môi trường có độ chi tiết cao. CPU nhanh hơn xử lý những khối lượng công việc phức tạp và các ứng dụng kinh doanh một cách dễ dàng. A17 Pro có khả năng tiết kiệm năng lượng ấn tượng, mang đến thời lượng pin cả ngày tuyệt vời, giúp bạn thoải mái dùng cho công việc khi đang di chuyển.<sup>3</sup></li>\n<li>HỆ THỐNG CAMERA PRO MẠNH MẼ — Sở hữu khung hình linh hoạt đáng kinh ngạc với 7 ống kính chuyên nghiệp. Chụp ảnh có độ phân giải siêu cao với nhiều màu sắc và chi tiết hơn bằng camera Chính 48MP. Và chụp ảnh cận cảnh sắc nét hơn từ khoảng cách xa hơn với camera Telephoto 5x trên iPhone 15 Pro Max.</li>\n<li>NÚT TÁC VỤ CÓ THỂ TÙY CHỈNH — Nút Tác Vụ là cách nhanh chóng đến tính năng yêu thích của bạn. Chỉ cần đặt thành một tác vụ bạn muốn, chẳng hạn chế độ Im Lặng, Camera, Ghi Âm hoặc Phím Tắt và nhiều tác vụ khác. Sau đó nhấn và giữ để khởi chạy tác vụ đó.</li>\n<li>KẾT NỐI PRO — Cổng kết nối USB-C mới cho phép bạn sạc máy Mac hoặc iPad bằng cùng cáp sạc với iPhone 15 Pro Max. Với USB 3, bạn sẽ thấy bước nhảy vọt về tốc độ truyền dữ liệu.<sup>4</sup> Và bạn có thể tải xuống tập tin nhanh hơn đến 2x bằng Wi-Fi 6E.<sup>5</sup></li>\n<li>CÁC TÍNH NĂNG AN TOÀN QUAN TRỌNG — Với tính năng Phát Hiện Va Chạm, iPhone có thể phát hiện va chạm ô tô nghiêm trọng và gọi trợ giúp khi cần kíp.<sup>6</sup></li>\n<li>ĐƯỢC THIẾT KẾ ĐỂ TẠO NÊN KHÁC BIỆT — iPhone trang bị các biện pháp bảo vệ quyền riêng tư, cho bạn quyền kiểm soát dữ liệu của mình. iPhone được làm từ nhiều vật liệu tái chế hơn để giảm thiểu tác động tới môi trường. Và được tích hợp những tính năng giúp iPhone dễ sử dụng hơn cho tất cả mọi người.</li>\n<li>ĐI KÈM VỚI BẢO HÀNH APPLECARE — Mỗi iPhone đều được bảo hành giới hạn trong một năm và hỗ trợ kỹ thuật miễn phí trong tối đa 90 ngày. Mua AppleCare+ để kéo dài thời hạn bảo hành.</li></ul><h3>Pháp lý</h3><p><sup>1</sup>iPhone 15, iPhone 15 Plus, iPhone 15 Pro và iPhone 15 Pro Max có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.&nbsp;</p><p><sup>2</sup>Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích thước màn hình theo đường chéo là 6,12 inch (iPhone&nbsp;15&nbsp;Pro, iPhone&nbsp;15) hoặc 6,69 inch (iPhone&nbsp;15&nbsp;Pro&nbsp;Max, iPhone&nbsp;15&nbsp;Plus). Diện tích hiển thị thực tế nhỏ hơn.</p><p><sup>3</sup>Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập  để biết thêm thông tin.</p><p><sup>4</sup>Yêu cầu cáp USB 3 với tốc độ 10Gb/s để đạt tốc độ truyền nhanh hơn đến 20x trên các phiên bản iPhone 15 Pro.</p><p><sup>5</sup>Wi-Fi 6E khả dụng tại các quốc gia và khu vực có hỗ trợ.</p><p><sup>6</sup>iPhone 15 và iPhone 15 Pro có thể phát hiện va chạm ô tô nghiêm trọng và gọi trợ giúp. Yêu cầu kết nối mạng di động hoặc Cuộc Gọi Wi-Fi.</p><p>&nbsp;</p><h3>Thông số kỹ thuật</h3><p>Truy cập  để xem cấu hình đầy đủ.</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>',
    status: false,
    averageRating: 4,
    numberOfReviews: 112,
    numberOfPurchases: 672,
    storeDto: {
      id: 1,
      name: "Apple",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    },
    brandDto: {
      id: 1,
      name: "Apple",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    },
    relatedProducts: [
      {
        id: 1,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29650000,
      },
      {
        id: 11,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29990000,
      },
      {
        id: 12,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29890000,
      },
      {
        id: 2,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro",
        averageRating: 5,
        price: 26990000,
      },
      {
        id: 3,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
        name: "Iphone 15 Plus",
        averageRating: 4,
        price: 23990000,
      },
      {
        id: 4,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
        name: "Iphone 15",
        averageRating: 4,
        price: 20690000,
      },
    ],
    productAttributes: [
      {
        id: 1,
        name: "Màu sắc",
        productAttributeValues: [
          {
            id: 1,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/5e/8e/5a/ffd57c334ad997d311d311be41ef6aa8.png.webp",
            value: "Titan Trắng",
            attributeId: 1,
          },
          {
            id: 3,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/99/86/04/0dc97405d243042a84b2c96768fe0e38.png.webp",
            value: "Titan Xanh",
            attributeId: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Dung lượng",
        productAttributeValues: [
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
    ],
    productVariants: [
      {
        id: 1,
        quantity: 11,
        price: 30990000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        productImages: [
          {
            id: 2,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg",
          },
          {
            id: 3,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-2-1.jpg",
          },
          {
            id: 4,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-3-1.jpg",
          },
          {
            id: 5,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-4-1.jpg",
          },
        ],
        productAttributeValues: [
          {
            id: 3,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/99/86/04/0dc97405d243042a84b2c96768fe0e38.png.webp",
            value: "Titan Xanh",
            attributeId: 1,
          },
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
      {
        id: 2,
        quantity: 10,
        price: 29990000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        productImages: [
          {
            id: 2,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-1.jpg",
          },
          {
            id: 3,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-2.jpg",
          },
          {
            id: 4,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-3.jpg",
          },
          {
            id: 5,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-4.jpg",
          },
        ],
        productAttributeValues: [
          {
            id: 1,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/5e/8e/5a/ffd57c334ad997d311d311be41ef6aa8.png.webp",
            value: "Titan Trắng",
            attributeId: 1,
          },
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
    ],
  })
);

app.listen(8080, () => console.log("Server ready on port 8080."));
module.exports = app;
