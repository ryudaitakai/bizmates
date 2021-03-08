public class kadai3a {
    static int simulation (int hour, int min) {
        int degree;
        hour = hour % 12;

        int h_deg = 360 * hour / 12;
        int m_deg = 360 * min / 60;

        degree = h_deg - m_deg;
        if (degree <= 0) {
            degree *= -1;
        }
        if (degree > 180) {
            degree -= 180;
        }

        return degree;
    }

    public static void main(String[] args) {
        int degree;
        int hour = 18;
        int min = 50;

        // you can use the bottom two lines for inputting hours and minutes on the command line
        // hour = Integer.parseInt(args[0]); 
        // min = Integer.parseInt(args[1]);
        
        degree = simulation(hour, min);

        System.out.println(hour + ":" + min);
        System.out.println("degree : " + degree);
    }
}
