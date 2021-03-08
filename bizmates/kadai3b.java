public class kadai3b {
    static String zodiac(int year) {
        String zodiac = "";

        switch(year % 12) {
            case 0: zodiac = "ê\"; break;
            case 1: zodiac = "ì—"; break;
            case 2: zodiac = "ú˙"; break;
            case 3: zodiac = "àÂ"; break;
            case 4: zodiac = "éq"; break;
            case 5: zodiac = "âN"; break;
            case 6: zodiac = "ì–"; break;
            case 7: zodiac = "âK"; break;
            case 8: zodiac = "íC"; break;
            case 9: zodiac = "ñ§"; break;
            case 10: zodiac = "åﬂ"; break;
            case 11: zodiac = "ñ¢"; break;
            default: break;
        }

        return zodiac;
    }

    static String star(int month, int date) {
        String star = "";

        switch(month) {
            case 1:
                if (date <= 19) {
                    star = "Capricorn";
                } else {
                    star = "Aquarius";
                }
                break;
            case 2:
                if (date <= 18) {
                    star = "Aquarius";
                } else {
                    star = "Pisces";
                }
                break;
            case 3:
                if (date <= 20) {
                    star = "Pisces";
                } else {
                    star = "Aries";
                }
                break;
            case 4:
                if (date <= 19) {
                    star = "Aries";
                } else {
                    star = "Taurus";
                }
                break;
            case 5:
                if (date <= 20) {
                    star = "Taurus";
                } else {
                    star = "Gemini";
                }
                break;
            case 6:
                if (date <= 21) {
                    star = "Gemini";
                } else {
                    star = "Cancer";
                }
                break;
            case 7:
                if (date <= 22) {
                    star = "Cancer";
                } else {
                    star = "Leo";
                }
                break;
            case 8:
                if (date <= 22) {
                    star = "Leo";
                } else {
                    star = "Virgo";
                }
                break;
            case 9:
                if (date <= 22) {
                    star = "Virgo";
                } else {
                    star = "Libra";
                }
                break;
            case 10:
                if (date <= 23) {
                    star = "Libra";
                } else {
                    star = "Scorpio";
                }
                break;
            case 11:
                if (date <= 22) {
                    star = "Scorpio";
                } else {
                    star = "Sagittarius";
                }
                break;
            case 12:
                if (date <= 21) {
                    star = "Sagittarius";
                } else {
                    star = "Capricorn";
                }
                break;
            default: break;
        }

        return star;
    }

    public static void main(String[] args) {
        String[] birth;
        int year, month, date;
        for (int i = 0; i < args.length; i++) {
            birth = args[i].split("/", 0); 
            year = Integer.parseInt(birth[0]); 
            month = Integer.parseInt(birth[1]); 
            date = Integer.parseInt(birth[2]); 
            System.out.println(args[i] + " " + star(month, date) + " " + zodiac(year));
        }
    }
}
