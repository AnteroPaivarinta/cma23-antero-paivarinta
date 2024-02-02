package com.example;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {

      Label firstLabel = new Label("FIRST VIEW");
      Label thirdLabel = new Label("Third View");

      Button firstButton = new Button("TO SECOND VIEW");
      Button secondButton = new Button("TO THIRD VIEW");
      Button thirdButton = new Button("To first view");

      GridPane grid = new GridPane();
      grid.add(thirdLabel, 0, 0);
      grid.add(thirdButton, 1, 1);

      BorderPane firstPane = new BorderPane(); // First View
      firstPane.setTop(firstLabel);
      firstPane.setCenter(firstButton);

      VBox secondBox = new VBox(); //Second View
      secondBox.getChildren().addAll(secondButton);
        
      Scene first = new Scene(firstPane);   //First Scene
      Scene second = new Scene(secondBox); //Second scene
      Scene third = new Scene(grid);

        firstButton.setOnAction((event) -> {
            stage.setScene(second);
        });

        secondButton.setOnAction((event) -> {
            stage.setScene(third);
        });

        thirdButton.setOnAction((event) -> {
            stage.setScene(first);
        });

        stage.setScene(first);
        stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}