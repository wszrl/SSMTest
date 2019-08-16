package send;


import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.http.HttpResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/*
 *@autho  zhengruilong
 *@date 2019-08-09
 */
public class Send {

    public static void main(String[] args) {


//        HttpClient httpClient=new HttpClient();
//        PostMethod post = new PostMethod("http://sms.webchinese.cn/web_api/");
//        post.addRequestHeader("Content-Type",
//                "application/x-www-form-urlencoded;charset=utf-8");// 在头文件中设置转码
//        NameValuePair[] data = { new NameValuePair("Uid", "wszrl123"), // 注册的用户名
//                new NameValuePair("Key", "d41d8cd98f00b204e980"), // 注册成功后,登录网站使用的密钥
//                new NameValuePair("smsMob", "18161867838"), // 手机号码
//                new NameValuePair("smsText", "戈尔泰的《飞鸟与鱼》 The most distant way in the world is not in two distant trees" +
//                        "It is the same rooted branches can't enjoy the co-existance. The most distant way in the world is not in the being sepearated branches.It is in the blinking stars they can't burn the light. Best Wishes for you ") };//设置短信内容
//        post.setRequestBody(data);
//
//        try {
//            httpClient.executeMethod(post);
//            Header[] headers = post.getResponseHeaders();
//            int statusCode = post.getStatusCode();
//            System.out.println("statusCode:" + statusCode);
//            for (Header h : headers) {
//                System.out.println(h.toString());
//            }
//            String result = new String(post.getResponseBodyAsString().getBytes(
//                    "utf-8"));
//            System.out.println(result);
//            post.releaseConnection();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }


        String host = "http://yzx.market.alicloudapi.com";
        String path = "/yzx/sendSms";
        String method = "POST";
        String appcode = "你自己的AppCode";
        Map<String, String> headers = new HashMap<String, String>();
        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
        headers.put("Authorization", "APPCODE " + appcode);
        Map<String, String> querys = new HashMap<String, String>();
        querys.put("mobile", "18161867838");
        querys.put("param", "code:75e92e039d9e4c3fb7abb9a866f45458");
        querys.put("tpl_id", "TP1710262");
        Map<String, String> bodys = new HashMap<String, String>();


        try {
            /**
             * 重要提示如下:
             * HttpUtils请从
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
             * 下载
             *
             * 相应的依赖请参照
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
             */
            HttpResponse response = HttpUtils.doPost(host, path, method, headers, querys, bodys);
            System.out.println(response.toString());
            //获取response的body
            //System.out.println(EntityUtils.toString(response.getEntity()));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
