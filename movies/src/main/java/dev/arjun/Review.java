package dev.arjun;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "reviews")
public class Review {
    private ObjectId id;
    private String body;


    public Review() {
    }

    public Review(ObjectId id, String body) {
        this.id = id;
        this.body = body;

    }

    public Review(String body) {
        this.body = body;

    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

}
